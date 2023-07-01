import SuccessImage from "../assets/icon-thank-you.svg";

export default function ()  {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center gap-4">

            <img alt="success" src={SuccessImage}/>

            <div className="text-center my-4">
            <h1 className="font-bold text-marine-blue text-3xl mb-2">Thank you!</h1>
            <p className="text-center text-cool-gray">

  Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.
                
            </p>
            </div>

            
        </div>
    )

}
