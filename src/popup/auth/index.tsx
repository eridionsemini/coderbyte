import React, {Component} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import Close from '../../assets/icons/close.svg';

export interface IModal {
  close(): void;
  open(): void;
}

interface Props {
  ref: React.RefObject<AuthModal>;
  children: JSX.Element | JSX.Element[];
  outTouch: () => void;
}

interface State {
  visible: boolean;
}

class AuthModal extends Component<Props, State> implements IModal {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
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

  renderOutsideTouchable(outTouch: () => void) {
    const view = <View style={styles.outTouch} />;
    if (!outTouch) {
      return view;
    }
    return (
      <TouchableOpacity onPress={outTouch} style={styles.outTouch}>
        {view}
      </TouchableOpacity>
    );
  }

  render() {
    const {children, outTouch} = this.props;
    const {visible} = this.state;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={visible}
        onRequestClose={this.close}>
        <View style={styles.outsideContainer}>
          {this.renderOutsideTouchable(outTouch)}
          <View style={styles.container}>
            <TouchableOpacity style={styles.close} onPress={() => this.close()}>
              <Close />
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </Modal>
    );
  }
}

export default AuthModal;
