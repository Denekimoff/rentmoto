import React from 'react';

type TabItemType = {
    children: Array<React.ReactNode>,
    isActive: Boolean
}

export default function TabItem ({ children, isActive }: TabItemType) {

  return (
    <div className={`tab-content ${isActive ? 'selected' : ''}`}>
      {children}
    </div>
  );
};



// App.js
// import React from 'react';
// import Tabs from './Tabs';
// import TabItem from './TabItem';

// const App = () => {
//   return (
//     <Tabs>
//       <TabItem label="Вкладка 1">
//         <h2>Содержимое вкладки 1</h2>
//         <p>Здесь находится информация для первой вкладки.</p>
//       </TabItem>
//       <TabItem label="Вкладка 2">
//         <h2>Содержимое вкладки 2</h2>
//         <p>Здесь находится информация для второй вкладки.</p>
//       </TabItem>
//     </Tabs>
//   );
// };

// export default App;