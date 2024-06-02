import { render } from "jsx-email";
import { Template } from "./emails/BatmanEmail";

export const renderEmail = function () {
    return render(<Template email="test@example.com" name="Batman" />);
}