import notion from '@/notion';

export async function getPages() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  return response.results;
}

export function parseNotionPages(pages: any[]) {
  return pages.map((page) => {
    const props = page.properties;
    const result: Record<string, any> = {};

    for (const key in props) {
      const prop = props[key];

      switch (prop.type) {
        case 'title':
          result[key] = prop.title
            .map((t: { text: { content: any } }) => t.text.content)
            .join('');
          break;
        case 'rich_text':
          result[key] = prop.rich_text
            .map((t: { text: { content: any } }) => t.text.content)
            .join('');
          break;
        case 'select':
          result[key] = prop.select?.name;
          break;
        case 'multi_select':
          result[key] = prop.multi_select.map((s: { name: any }) => s.name);
          break;
        case 'checkbox':
          result[key] = prop.checkbox;
          break;
        case 'date':
          result[key] = prop.date?.start;
          break;
        case 'number':
          result[key] = prop.number;
          break;
        case 'url':
          result[key] = prop.url;
          break;
        case 'email':
          result[key] = prop.email;
          break;
        case 'phone_number':
          result[key] = prop.phone_number;
          break;
        default:
          result[key] = prop[prop.type]; // fallback
      }
    }

    return result;
  });
}
