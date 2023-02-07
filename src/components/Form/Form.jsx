import "./Form.css";

export default function Form() {
  return (
    <div className="form-container">
        <h1>Contanct</h1>
      
        <form>
          <label for="name">Name:</label>
          <input  id="name" type="text" placeholder="Name" />

          <label for="email">E-mail:</label>
          <input id="email" type="email" placeholder="E-mail" />
          
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Message ..."></textarea>

          <input type="submit" value="Send"/>
        </form>
      </div>
    
  );
}
