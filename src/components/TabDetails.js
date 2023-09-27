import React,{useState} from 'react'
import ExchangeTab from '../components/AllTabs/ExchangeTab'
import ReturnTab from '../components/AllTabs/ReturnTab'
import RefundTab from '../components/AllTabs/RefundTab'
import '../styles/tabs.css'

const TabDetails = () => {
	const data = [
  {id : 1,
   tabTitle: "Exchange",
  },
  {id : 2,
   tabTitle: "Return",
  },
  {id : 3,
   tabTitle: "Refund",
  }
]

const [activeTab, setActiveTab] = useState(data[0].id);
console.log(activeTab)
const tabsTitles = data.map((item) => 
      <li key = {item.id} onClick={() => setActiveTab(item.id)} className={activeTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</li>
  )                                 
  return(
      <div className="tabs">
        <ul className="tabs-titles">
          {tabsTitles}
        </ul>
        <div className="tab-content">
          { data.map((item,id) => (
           <div key = {id} style={activeTab === item.id ? {} : {display: 'none'}} className='contentOutlet'>
                {
                  activeTab === 1 ? <ExchangeTab/> : activeTab === 2 ? <ReturnTab/> : <RefundTab/> 
                }
                
                
           </div>
      ))}
        </div>
      </div>
    )
}

export default TabDetails