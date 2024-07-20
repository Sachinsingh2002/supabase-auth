export default function ErrorPage() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          fontSize: '18px',
          color: '#333'
        }}
      >
        <div
          style={{
            maxWidth: '500px',
            backgroundColor: '#ffffff',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h1
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#ff0000'
            }}
          >
            Error 500: Internal Server Error
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#666'
            }}
          >
            Sorry, something went wrong. Our team has been notified and we're working to resolve the issue as soon as possible.
          </p>
          <p
            style={{
              fontSize: '16px',
              color: '#999'
            }}
          >
            Please try again later or contact our support team if the issue persists.
          </p>
        </div>
      </div>
    )
  }