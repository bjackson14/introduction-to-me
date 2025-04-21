import Banner from './components/banner/Banner'
import './App.css'

export default function App() {
  return (
    <>
      <Banner title="Update available">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner type="success" title="Congratulations!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner type="warning" title="Attention">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner type="error" title="There is a problem with your application">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner>
      <Banner title="Update available" />
      <Banner type="success" title="Congratulations!" />
      <Banner type="warning" title="Attention" />
      <Banner type="error" title="There is a problem with your application" />
    </>
  )
}