import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div style={{
      backgroundColor: '#f0f0f0', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '300px', 
        backgroundColor: '#ffffff', 
        padding: '20px', 
        border: '1px solid #ddd', 
        borderRadius: '10px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ color: '#333', fontSize: '24px', fontWeight: 'bold' }}>Login or Sign up</h2>
        <form>
          <label style={{ color: '#666' }} htmlFor="email">Email:</label>
          <input 
            id="email" 
            name="email" 
            type="email" 
            required 
            style={{
              padding: '10px', 
              fontSize: '16px', 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              width: '100%', 
              color: '#000000' // added this line
            }}
          />
          <br />
          <label style={{ color: '#666' }} htmlFor="password">Password:</label>
          <input 
            id="password" 
            name="password" 
            type="password" 
            required 
            style={{
              padding: '10px', 
              fontSize: '16px', 
              border: '1px solid #ccc', 
              borderRadius: '5px', 
              width: '100%', 
              color: '#000000' // added this line
            }}
          />
          <br />
          <button 
            style={{
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              backgroundColor: '#4CAF50', 
              color: '#ffffff', 
              fontSize: '16px', 
              fontWeight: 'bold'
            }} 
            formAction={login}
          >Log in</button>
          <button 
            style={{
              padding: '10px 20px', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: 'pointer', 
              backgroundColor: '#ff9800', 
              color: '#ffffff', 
              fontSize: '16px', 
              fontWeight: 'bold'
            }} 
            formAction={signup}
          >Sign up</button>
        </form>
      </div>
    </div>
  )
}