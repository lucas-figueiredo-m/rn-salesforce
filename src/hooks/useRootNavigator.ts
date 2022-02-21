import { createNavigationContainerRef } from '@react-navigation/native';
import { MainRoutes, MainStackParams, ModalRoutes } from 'navigator/RouterTypes';


export const rootNavigationRef = createNavigationContainerRef<MainStackParams>()

export default () => {
  const navigate = (screen: MainRoutes | ModalRoutes) => {
    if (rootNavigationRef.isReady()) {
      rootNavigationRef.navigate(screen);
    }
  }

  return { navigate }
}