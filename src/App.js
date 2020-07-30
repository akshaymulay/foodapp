import React from 'react';
import './App.css';
import { client } from './client';
import Posts from './components/Posts'

class App extends React.Component{
  state={
    articles:[]
  }
  componentDidMount(){
    client.getEntries()
    .then((response)=>{
      console.log(response)
      this.setState({
        articles:response.items
      })
    })
    .catch(console.error)
  }
  render(){
                   return(
          <div className="App">
         <div className="container">
         <header>
            <div className='wrapper'>
            <span>जिथे जाऊ तिथे खाऊ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>Follow me On&nbsp;&nbsp;</span>
            <span>
            <button className='my'><a href=" https://iglink.co/foodie_on_a_role">&nbsp;Instagram</a></button>
            </span>
            <p>@foodie_on_a_role</p>   
             </div>

         </header>
         <main>
            <div className='wrapper'>

              <Posts posts={this.state.articles}/>
            </div>


         </main>
         <footer className='footer'>
         <span>&copy;2020 Devloped By AKSHAY.MULAY</span>

         </footer>
               </div>
               </div>
        );
      }
      }

export default App;
