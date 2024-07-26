import { Image } from 'react-bootstrap'
import './assets/coffeesign.jpg'

function About() {
    return (
    <div >
    <br />
    <br />
    <Image src={require('./assets/coffeesign.jpg')} alt="Coffee sign" className="imgcs" />
    <br />
    <h1>Revive Your Tastebuds at Dreams Cafe!</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Imperdiet dui accumsan sit amet nulla facilisi. Sit amet mauris commodo quis. 
    Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Massa vitae tortor condimentum lacinia. 
    Arcu odio ut sem nulla. Id diam maecenas ultricies mi. Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. 
    Ac ut consequat semper viverra. Lacus sed turpis tincidunt id aliquet risus. 
    Natoque penatibus et magnis dis parturient montes nascetur. Ut tortor pretium viverra suspendisse potenti nullam ac.
    </p>
    </div>
  )
}

export default About