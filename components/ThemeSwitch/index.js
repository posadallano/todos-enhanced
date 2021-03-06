import { connect } from 'react-redux';
import { toggleSwitch } from '@store/actions/switch';
import { getIsDarkEnabled } from '@store/selectors/themeSwitch';
import ThemeSwitch from './ThemeSwitch';

const mapDispatchToProps = dispatch => ({
  dispatchSwitch: () => {
    dispatch(toggleSwitch.request.creator());
  },
});

function mapStateToProps(state) {
  return { isDarkThemeEnabled: getIsDarkEnabled(state) };
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default enhance(ThemeSwitch);
