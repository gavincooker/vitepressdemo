// export const sidebar = {
//   '/': [
//     {
//       text: '开发指南',
//       items: [
//         {
//           text: '介绍',
//           link: '/'
//         },
//         {
//           text: '安装',
//           link: '/guide/install/'
//         },
//         {
//           text: '快速开始',
//           link: '/guide/quickStart/'
//         },
//       ]
//     },
//     {
//       text: '基础组件',
//       items: [
//         {
//           text: 'Button 按钮',
//           link: '/components/button/'
//         },
//         {
//           text: 'Icon 图标',
//           link: '/components/icon/'
//         },
//         {
//           text: 'Dialog 弹窗',
//           link: '/components/dialog/'
//         }
//       ]
//     }
//   ]
// }

function getDemoSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'buttom',
          link: '/components/button',
        },
        {
          text: 'admin',
          link: '/components/admin',
        },
      ],
    },
  ];
}
export const sidebar = {
  '/components/': getDemoSidebar(),
}