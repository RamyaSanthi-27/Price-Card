
import './App.css';
import Message from './Message';

function App() {
  const planDetails= [
    {
      plan:"Free",
      price:"$0",
      
      features : [
        {
          name : "Single User",
          enable : true
        },
        {
          name : "5GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Project",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects", 
          enable : false
        },
        {
          name : "Dedicated Phone Support",
          enable : false
        },
        {
          name :"Free Subdomain",
          enable : false
        },
        {
          name : "Monthly Status Report" ,
          enable : false
        }
      ]
    },
  
    {
      plan:"Plus",
      price:"$9",
      
      features : [
        {
          name : "5 User",
          enable : true
        },
        {
          name : "50GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Project",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : true 
        },
        {
          name : "Dedicated Phone Support",
          enable : true
        },
        {
          name :"Free Subdomain",
          enable : true
        },
        {
          name : "Monthly Status Report",
          enable : false 
        }
      ]
    },
  
    {
      plan:"PRO",
      price:"$49",
      
      features : [
        {
          name : "Unlimited User",
          enable : true
        },
        {
          name : "150GB Storage",
          enable : true
        },
        {
          name : "Unlimited Public Project",
          enable : true
        },
        {
          name : "Community Access",
          enable : true
        },
        {
          name : "Unlimited Private Projects",
          enable : true 
        },
        {
          name : "Dedicated Phone Support",
          enable : true
        },
        {
          name :"Unlimited Free Subdomain",
          enable : true
        },
        {
          name : "Monthly Status Report",
          enable : true 
        }
      ]
    }
  ]
  
  return (
    




<section className="pricing py-5">
    <div className="container">
     <div className="row">
    

     {
                planDetails.map((detail) => {
                    return <Message details={detail}></Message>
                    
                })
     } 
    
    </div>
        </div>
     
</section>  
 
  );
}

export default App;
