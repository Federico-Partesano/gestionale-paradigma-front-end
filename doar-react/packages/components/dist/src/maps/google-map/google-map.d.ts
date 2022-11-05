/// <reference types="react" />
/// <reference types="google.maps" />
import { LayoutProps } from "@doar/shared/styled";
declare type MapProps = google.maps.MapOptions & LayoutProps & {
    marker?: boolean;
};
declare const MyMap: React.FC<MapProps>;
export default MyMap;
