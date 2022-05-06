import { deviceType} from "~/utils/deviceType";
import utils from "../utils/common";

export default async (context) => {
    const  { req, error, $winstonLog } = context
    if(req) {
        // x-real-ip 通过nginx配置添加
        const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
        const xforwardedfor = req.headers['x-forwarded-for']
        utils.ip = ip
        utils.xforwardedfor = xforwardedfor
        // context.store.commit("SetDeviceType", {ip, xforwardedfor});
    }
    return true;
};