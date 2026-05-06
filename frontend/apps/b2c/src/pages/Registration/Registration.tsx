import { useCallback } from 'react';
import { useSheetNavigation } from '../../navigation';
import { PhoneStep } from './steps/PhoneStep';
import { OtpStep } from './steps/OtpStep';
import { ProfileStep } from './steps/ProfileStep';
import { PreferencesStep } from './steps/PreferencesStep';
import { SuccessScreen } from './screens/SuccessScreen';
import { ExpiredScreen } from './screens/ExpiredScreen';

const FULL = { fullWidth: true };

type RegistrationProps = {
  onComplete: () => void;
};

export function Registration({ onComplete }: RegistrationProps) {
  const { push, pop, closeAll } = useSheetNavigation();

  const handlePhoneNext = useCallback((phone: string) => {
    const pushOtp = (phoneNum: string) => {
      push(
        <OtpStep
          phone={phoneNum}
          onNext={() =>
            push(
              <ProfileStep
                onNext={(_profile) =>
                  push(
                    <PreferencesStep
                      onNext={() =>
                        push(
                          <SuccessScreen
                            onGoToEvents={() => { closeAll(); onComplete(); }}
                            onGoToProfile={() => { closeAll(); onComplete(); }}
                            onClose={() => { closeAll(); onComplete(); }}
                          />,
                          FULL
                        )
                      }
                    />,
                    FULL
                  )
                }
              />,
              FULL
            )
          }
          onExpired={() =>
            push(
              <ExpiredScreen
                onResend={() => { pop(); pushOtp(phoneNum); }}
                onChangePhone={() => { pop(); pop(); }}
              />,
              FULL
            )
          }
          onResend={() => { pop(); pushOtp(phoneNum); }}
        />,
        FULL
      );
    };
    pushOtp(phone);
  }, [push, pop, closeAll, onComplete]);

  return <PhoneStep onNext={handlePhoneNext} />;
}
