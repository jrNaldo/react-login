import Form from './Formulario/Form'
import bgImage from './assets/bg.webp'

export default function App() {
  return (
    <div 
        className={`w-full min-h-screen bg-cover flex flex-col justify-center items-center p-8`}
        style={{ backgroundImage: `url(${bgImage})` }}
    >
        <Form />
    </div>
  )
} 