import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './header'
import PrintJoseph from './imagem'
import ProfileJojo from './profilejojo' 

ReactDOM.createRoot(document.getElementById('root')).render( 
  <>
  <Header />
  <PrintJoseph />
  <ProfileJojo 
    foto = "https://tm.ibxk.com.br/2022/12/15/15135939320320.jpg?ims=1200x675" 
    nome="Jotaro Joestar"
    stand="Star Platinum"
  />
  </>
  
)


