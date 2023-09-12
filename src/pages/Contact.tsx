

const Contact = () => {
  return (
    <div className="container mx-auto p-6 text-white justify-contentcenter">
    <h1 className="text-3xl md:text-4xl font-semibold mb-6">Contact Me</h1>
    <div className="flex flex-col items-center md:flex-row">
      <div className="md:w-1/2 md:pr-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Email:</strong> ashishpandey46209@gmail.com
        </p>
        <p className="mb-4">
          <strong>LinkedIn:</strong>{' '}
          <a
            href="https://www.linkedin.com/in/ash1sh-pandey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
           my linkedin profile
          </a>
        </p>
        <p className="mb-4">
          <strong>Instagram:</strong>{' '}
          <a
            href="https://www.instagram.com/gamersenpai69/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            my instagram profile
          </a>
        </p>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        {/* You can add a Google Maps embed or any other location map here */}
      </div>
    </div>
  </div>
)}

export default Contact
