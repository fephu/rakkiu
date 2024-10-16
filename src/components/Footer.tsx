import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTiktok,
  BiCopyright,
  BiRegistered,
} from "react-icons/bi";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MaxWidthWrapper className="flex flex-col sm:flex-row items-center justify-between py-8 px-1 gap-y-4">
      <div className="flex items-center gap-2">
        <Link to={"https://www.facebook.com/rakkiu.official"} target="_blank">
          <BiLogoFacebookCircle className="size-5" />
        </Link>
        <Link to={"https://www.instagram.com/rakkiu.official"} target="_blank">
          <BiLogoInstagram className="size-5" />
        </Link>

        <Link
          to={"https://www.youtube.com/channel/UCf5a7I3gslSNTdLvI1J3wiA"}
          target="_blank"
        >
          <BiLogoYoutube className="size-5" />
        </Link>
        <BiLogoTiktok className="size-5" />
      </div>

      <div className="flex items-center gap-4">
        <Link
          to={"/privacy-policy"}
          className="uppercase hover:text-zinc-600 text-sm tracking-tight hover:underline"
          reloadDocument
        >
          Privacy Policy
        </Link>
        <Link
          to={"/shipping-exchange"}
          className="uppercase hover:text-zinc-600 text-sm tracking-tight hover:underline"
          reloadDocument
        >
          Shipping&Exchange
        </Link>
        <Link
          to={"/store"}
          className="uppercase hover:text-zinc-600 text-sm tracking-tight hover:underline"
          reloadDocument
        >
          Store
        </Link>
        <Link
          to={"/contact"}
          className="uppercase hover:text-zinc-600 text-sm tracking-tight hover:underline"
          reloadDocument
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center">
        <BiCopyright className="size-4 text-muted-foreground" />
        <span className="text-sm tracking-tight text-muted-foreground">
          2022 RAKKIU
        </span>
        <BiRegistered className="size-4 text-muted-foreground" />
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
