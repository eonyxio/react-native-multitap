/**
 * react-native-multitap
 *
 * @author      Anees Muzzafer Shah
 * @copyright   Eonyx Infotech LLP
 * @link https://eonyx.io
 *
 */

import React from "react";
import { Pressable } from "react-native";

var noOfTaps = 0;

export default DoubleTap = (props) => {
    const { children, delay = 200, onSingleTap, onDoubleTap, onTripleTap, onNTap } = props;
    const handleTaps = () => {
        if (noOfTaps === 0) {
            setTimeout(() => {
                switch (noOfTaps) {
                    case 1:
                        onSingleTap();
                        break;
                    case 2:
                        onDoubleTap();
                        break;
                    case 3:
                        onTripleTap();
                        break;
                    default:
                        onNTap(noOfTaps);
                        break;
                }

                noOfTaps = 0;
            }, delay);
        }

        noOfTaps++;
    };

    return <Pressable {...props} onPress={handleTaps}>{children}</Pressable>;
};
