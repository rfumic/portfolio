import './CardComponent.css';
export default function CardComponent({
  title = '',
  description,
  repoUrl,
  appUrl,
  image = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ricoh-imaging.co.jp%2Fenglish%2Fproducts%2Fxg-1%2Fex%2Fimg%2Fex-pic07.jpg&f=1&nofb=1&ipt=88e14696f126aabc05e5db794172f147784ff9508c6b09595ad70d56cbb44104&ipo=images',
}) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />
        <div className="text-div">
          <p className="card-title">{title}</p>
          <p className="card-description">{description}</p>
          <div className="url-container">
            <a href={appUrl}>view app</a>
            <a href={repoUrl}>view code</a>
          </div>
        </div>
      </div>
    </>
  );
}
