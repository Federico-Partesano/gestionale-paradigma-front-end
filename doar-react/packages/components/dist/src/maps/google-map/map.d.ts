/// <reference types="react" />
/// <reference types="google.maps" />
declare type MapProps = google.maps.MapOptions & {
    children?: React.ReactNode;
    onClick?: (e: google.maps.MapMouseEvent) => void;
};
declare const Map: React.FC<MapProps>;
export default Map;
