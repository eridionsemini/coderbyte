import React, {Component} from 'react';
import {View, Modal} from 'react-native';
import styles from './styles';

export interface IModal {
  close(): void;
  open(): void;
}

interface Props {
  ref: React.RefObject<AuthModal>;
  children: JSX.Element | JSX.Element[];
}

interface State {
  visible: boolean;
}

class AuthModal extends Component<Props, State> implements IModal {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  close = () => {
    this.setState({
      visible: false,
    });
  };

  open = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const {children} = this.props;
    const {visible} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={visible}
        onRequestClose={this.close}>
        <View style={styles.outsideContainer}>
          <View style={styles.container}>{children}</View>
        </View>
      </Modal>
    );
  }
}

export default AuthModal;
