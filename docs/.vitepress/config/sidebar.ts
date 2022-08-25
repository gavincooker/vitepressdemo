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