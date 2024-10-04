import './page-heading.css';

const PageHeading = ({ title, subtitle }) => {
    return (
        <div className="page-heading">
            <h1 className="page-title">
                {title}
            </h1>
            <p className="page-subtitle">
                {subtitle}
            </p>
        </div>
    )
}

export default PageHeading;
