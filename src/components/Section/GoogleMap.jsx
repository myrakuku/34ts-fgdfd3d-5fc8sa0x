export const GoogleMap = () => {
    return(
        <div className="flex justify-center m-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d7381.285054427135!2d114.160223!3d22.3293553!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20143%201%20F%20Godfrey%20Centre%20175-185%20Lai%20Chi%20Kok%20Road%20Sham%20Shui%20Po%20Kowloon!5e0!3m2!1sen!2shk!4v1751431406629!5m2!1sen!2shk"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    );
};

export default GoogleMap;