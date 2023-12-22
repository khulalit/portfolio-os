import WifiIcon from "@/assets/Statusbar/wifi.svg";
import SpeakerIcon from "@/assets/Statusbar/speaker.svg";
import DropdownIcon from "@/assets/Statusbar/dropdown.svg";
import Image from "next/image";

export default function Controls({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex gap-4 cursor-pointer" onClick={onClick}>
      <div>
        <Image src={WifiIcon} alt="wifi icon" width={18} />
      </div>
      <div>
        <Image src={SpeakerIcon} alt="speaker icon" width={18} />
      </div>
      <div>
        <Image src={DropdownIcon} alt="dropdown icon" width={18} />
      </div>
    </div>
  );
}
