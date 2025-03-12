const NotFound = () => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                fontSize: "200px",
                fontWeight: "bold",
                textShadow: "4px 4px 10px rgba(0,0,0,0.5)",
            }}>
                <span>4</span>
                <img src="loading.jpg" alt="404" style={{ height: "120px" }} />
                <span>4</span>
            </div>
            <p style={{
                marginTop: "20px",
                fontSize: "18px",
                color: "#bbbbbb",
            }}>
                Oops! The page you're looking for doesn't exist.
            </p>
        </div>
    );
};

export default NotFound;
