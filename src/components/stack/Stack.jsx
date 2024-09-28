/* eslint-disable react/prop-types */
const Stack = (props) => {
  return (
    <div className="max-w-sm bg-onyx-bg border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition duration-200">
        <a href="#">
            <img className="rounded-t-lg" src={props.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-white dark:text-white">{props.name}</h5>
            </a>
        </div>
    </div>
  )
}

export default Stack