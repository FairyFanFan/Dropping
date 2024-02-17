// const services = require('./service');
import services  from "./service";
const searchName = (keyword) => {
    const matches = services.filter(service => service.name.includes(keyword));
    return matches.length > 3 ? matches.splice(0, 3) : matches;
};
// export default searchName;
// module.exports = searchName;
export default searchName;