import React from 'react';
import NavigationModal from "./NavigationModal";
import "../Styles/MyWork.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Header from './Header';
import Footer from './Footer';



class MyWork extends React.Component{
  constructor(props){
    super(props);
    this.state={
        showNavigationModal:false
    }
    document.addEventListener("keydown", this.handleClick, true);
    document.addEventListener("click", this.close, true);
}

close = () => {
  this.setState({
    showNavigationModal:false
  })
}

handleClick = (e) => {
    if(e.key === "s" || e.key === "S") {
        this.setState({
            showNavigationModal:true
        })
        console.log(e.key)
    } else if(e.key === "w" || e.key === "W") {
        this.setState({
            showNavigationModal:false

        })
        console.log(e.key)
    }
}
    
  render(){
    return(
      <>
      <Header />
        <div className="outterWrapper">
        
            <div className='headder'>
          <div>
          <Nav fill justify variant="tabs"  >
          <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-0">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-1">Data Science</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-2">Web Scrapping</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-3">Desktop Application</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-4">Automation</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-5">Data Bases</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-6">Machine Learning</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="tabsfilter" eventKey="link-7">Web Development</Nav.Link>
      </Nav.Item>

    </Nav>
          </div>
          </div>
          <div className='innerWrapper'>
          <div className='myworksection'>
          <Card id='wordCard' >
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Data Science</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>

    <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Web Scrapping</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>
    </div>
    <div className='myworksection'>
          <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Web Development</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>

    <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Web Development</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>
    </div>
    <div className='myworksection'>
          <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Automation</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>

    <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | SQL and Data Bases</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>
    </div>
    <div className='myworksection'>
          <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Desktop Application</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>

    <Card id='wordCard'>
      <Card.Img className="cardImage" variant="top" src={require('../img/home.jpg')} />
      <Card.Body>
        <Card.Title><h4>Bookem Web App | Machine Learning</h4></Card.Title>
        <Card.Text><p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.</p>

        </Card.Text>
        <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
      </Card.Body>
    </Card>
    </div>
          {/* <div className='myworksection'>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Data Science</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
          </div>

          <div className='myworksection'>
            
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Web Scrapping</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
          </div>
          <div className='myworksection'>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Desktop Application</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
          </div>

          <div className='myworksection'>
            
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Python Automation</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
          </div>
          <div className='myworksection'>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
            <div className='ProjectDesc'>
              <h3>Bookem Web App | SQL and Data Bases</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
          </div>

          <div className='myworksection'>
            
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Machine Learning</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
          </div>
          <div className='myworksection'>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Web Development JS</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
          </div>

          <div className='myworksection'>
            
            <div className='ProjectDesc'>
              <h3>Bookem Web App | Web Development Django</h3>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras erat quam, facilisis sed fermentum id, hendrerit ac urna. Duis vitae ullamcorper neque, sit amet dapibus urna. Donec vel consectetur libero. Vestibulum vitae nunc vitae nisl finibus egestas non eu purus. Duis sit amet velit sed lorem placerat interdum eget eget justo. In sed ultricies eros, in rutrum nibh. Vestibulum lobortis sollicitudin porttitor.
              </p>
              <div className='moreLinks'>
              <a href="#">Learn More</a>
              <a href="#">Live Site</a>
              </div>
            </div>
            <div className='ProjectImg'>
              <img src={require('../img/home.jpg')}/>
            </div>
          </div> */}

          </div>
          
          

        </div>

        <NavigationModal 
      show={this.state.showNavigationModal}
      />
      <Footer />
        </>
    )
  }
}

export default MyWork;
