import "../assets/styles/Loading.css";

const Loading = () => {


  return (
      <>
        <div className="loading-wrapper" >
          <div >
              <svg height="100" width="200">
                <text className="logo-svg logo-svg-loading" x="-5" y="80">Elmo</text>
              </svg>
              </div>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
      </>
  );
};

export default Loading;