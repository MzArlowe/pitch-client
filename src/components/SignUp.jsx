import "./SignUp.css"

export default function SignUp() {
  return (
    <div>
        <h1>Are you a Founder or a Funder?</h1>
        <h6><strong>Founder: </strong>And individual that forms and establishes a business or organization. Essentially, a Founder takes an idea to an entity.</h6>
        <h6><strong>Funder: </strong>A person or organization that provides money for a particular purpose.</h6>

        <div>
            <a className="Founder" href="/">
                <button>Founder</button>
            </a>
        </div>

        <div className="Founder">
            <a href="/">
                <button>Founder</button>
            </a>
        </div>

    </div>
  )
}