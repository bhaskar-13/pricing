
import './App.css';

function App() {
  return (
    <div className="App">
      <PrincingComponent/>
    </div>
  );  
}

export default App;

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color,
      backgroundColor:{color},
      height:3,
      margin:8
      
    }}
  />
);

function PrincingComponent(){
   return(
     <section className="maincontainer">
       <div className="container1">
            <p className="text-muted">Free</p>
            <p><span className="price">$0</span><span >/month</span></p>
            <ColoredLine color="black" />
          <ul>
              <li>  &#10004;Single User</li>
              <li>  &#10004;5GB Storage</li>
              <li>	&#10004;Unlimited Public Projects</li>
              <li>	&#10004;Community Access</li>
              <li className="text-muted">  &#10006;Unlimited Private Projects</li>
              <li className="text-muted">	&#10006;Dedicated Phone Support</li>
              <li className="text-muted">	&#10006;Free Subdomain</li>
              <li className="text-muted">	&#10006;Monthly Status Reports</li>
          </ul>
          <button type="button" className="btn btn-primary">Submit</button>
       </div>

       <div className="container1">
            <p className="text-muted"> PLUS</p>
            <p><span className="price">$9</span><span >/month</span></p>
            <ColoredLine color="black" />
            <ul>
              <li>&#10004;<b>5 Users</b></li>
              <li>&#10004;50GB Storage</li>
              <li>&#10004;Unlimited Public Projects</li>
              <li>&#10004;Community Access</li>
              <li>&#10004;Unlimited Private Projects</li>
              <li>&#10004;Dedicated Phone Support</li>
              <li>&#10004;Free Subdomain</li>
              <li className="text-muted">&#10006;Monthly Status Reports</li>
            </ul>
            <button type="button" className="btn btn-primary">Submit</button>
       </div>

       <div className="container1">
       <p className="text-muted">PRO</p>
            <p><span className="price">$0</span><span >/month</span></p>
            <ColoredLine color="black" />
            <ul>
              <li>&#10004;<b>Unlimited Users</b></li>
              <li>&#10004;150GB Storage</li>
              <li>&#10004;Unlimited Public Projects</li>
              <li>&#10004;Community Access</li>
              <li>&#10004;<b>Unlimited</b> Private Projects</li>
              <li>&#10004;Dedicated Phone Support</li>
              <li>&#10004;Free Subdomain</li>
              <li>&#10004;Monthly Status Reports</li>
            </ul>
            <button type="button" className="btn btn-primary">Submit</button>
       </div>
     </section>
   );
}