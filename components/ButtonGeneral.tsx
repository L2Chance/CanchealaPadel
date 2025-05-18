import * as React from "react";
import { Button } from "react-native-paper";

const ButtonGeneral = ({ icon, mode, onPress, children }) => (
  <Button buttonColor="#FF8C00" icon={icon} mode={mode} onPress={onPress}>
    {children}
  </Button>
);

export default ButtonGeneral;
