
import { default as Loader } from "../assets/loader.svg";

export default function Button({typeButton = "submit", stateButton = "default", labelButton = "Submit", labelLoading = "Loading", customStyle = " mt-4 p-3 "}) {

// const Button = ({typeButton, stateButton, labelButton, labelLoading}) => {
    return (
        <button disabled={stateButton !== 'default'} type={typeButton} className={` ${customStyle} relative w-full ${stateButton === 'default' ? 'bg-indigo-600 shadow cursor-pointer' : 'bg-indigo-400 cursor-default'} text-white rounded flex flex-row justify-center`}>
            <img src={Loader} className={` ${stateButton === 'default' ? 'hidden' : ''} absolute right-10 top-50`} alt="loading"/>
            {stateButton === 'default' ? labelButton : labelLoading}
        </button>
    );
  };

//   export default Button;