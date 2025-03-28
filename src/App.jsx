import iconStar from "./assets/icon-star.svg"

export function App() {
  return(
    <div>
      <img src={iconStar} alt="icon star" />
      <h1>How did we go?</h1>

      <p>Please le us now how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

      <div>
        <input type="button" value={1} />
        <input type="button" value={2} />
        <input type="button" value={3} />
        <input type="button" value={4} />
        <input type="button" value={5} />
      </div>

      <button>submit</button>
    </div>
  )
}