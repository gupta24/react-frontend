import './Popup.css';

const Popup = ({hover, close , usrEle}) => {

    //console.log(hover);
    return (
        <div className="popup-card-container"
           style={{
               transform: hover ? 'translateX(0vh)' : 'translateX(-100vh)',
               opacity: hover ? '1' : '0'
           }}
        >
            <div className="closeBtn" onClick={close}>&times;</div>
            <div className="popup-card-img">
                <img src={usrEle.thumbnail.small}  alt='thumbnail image' />
            </div>
            <div className="popup-card-text">
                <div className="popup-card-title">
                    <h1>{usrEle.title}</h1>
                </div>
                <div className="popup-card-body">
                    <p>{usrEle.content}</p>
                </div>
                <div className="popup-author-name">
                    <img src={usrEle.author.avatar} alt='author avatar image' />
                    <p>{usrEle.author.name} {'-'} {usrEle.author.role}</p>
                </div>
            </div>
        </div>
    );
            
};

export { Popup }