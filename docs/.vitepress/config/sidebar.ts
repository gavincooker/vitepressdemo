function getDemoSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'button',
          link: '/components/button',
        },
        {
          text: 'admin',
          link: '/components/admin',
        },
        {
          text: 'dialog',
          link: '/components/dialog'
        }
      ],
    },
  ];
}
export const sidebar = {
  '/components/': getDemoSidebar(),
}