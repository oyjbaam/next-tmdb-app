import React from 'react'

interface TabsProps {
  tabPannel: string[]
}
const Tabs = ({ tabPannel }: TabsProps) => {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        {tabPannel.map(tab => (
          <li key={tab} className="me-2 inline-block p-4 border-b-2 rounded-t-lg cursor-pointer">
            {tab}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tabs
