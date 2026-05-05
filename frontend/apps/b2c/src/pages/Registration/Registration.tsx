import { useState, useCallback } from 'react';
import { useSheetNavigation } from '../../navigation';
import { PhoneStep } from './steps/PhoneStep';
import { OtpStep } from './steps/OtpStep';
import { ProfileStep } from './steps/ProfileStep';
import { PreferencesStep } from './steps/PreferencesStep';
import { SuccessScreen } from './screens/SuccessScreen';
import { ExpiredScreen } from './screens/ExpiredScreen';
import type { ProfileData } from './steps/ProfileStep';
import type { PreferencesData } from './steps/PreferencesStep';

type RegistrationProps = {
  onComplete: () => void;
  onCancel: () => void;
};

type RegistrationState = {
  phone: string;
  profile: ProfileData | null;
  preferences: PreferencesData | null;
};

type Step = 'phone' | 'otp' | 'profile' | 'preferences' | 'success' | 'expired';

export function Registration({ onComplete, onCancel }: RegistrationProps) {
  const { closeAll } = useSheetNavigation();
  const [step, setStep] = useState<Step>('phone');
  const [otpKey, setOtpKey] = useState(0);
  const [state, setState] = useState<RegistrationState>({
    phone: '',
    profile: null,
    preferences: null,
  });

  const handlePhoneNext = useCallback((phone: string) => {
    setState(s => ({ ...s, phone }));
    setStep('otp');
  }, []);

  const handleOtpNext = useCallback(() => {
    setStep('profile');
  }, []);

  const handleOtpExpired = useCallback(() => {
    setStep('expired');
  }, []);

  const handleResend = useCallback(() => {
    setOtpKey(k => k + 1);
    setStep('otp');
  }, []);

  const handleChangePhone = useCallback(() => {
    setStep('phone');
  }, []);

  const handleProfileNext = useCallback((profile: ProfileData) => {
    setState(s => ({ ...s, profile }));
    setStep('preferences');
  }, []);

  const handlePreferencesNext = useCallback((preferences: PreferencesData) => {
    setState(s => ({ ...s, preferences }));
    setStep('success');
  }, []);

  const handleClose = useCallback(() => {
    closeAll();
    onComplete();
  }, [closeAll, onComplete]);

  if (step === 'phone') {
    return <PhoneStep onNext={handlePhoneNext} />;
  }

  if (step === 'otp') {
    return (
      <OtpStep
        key={otpKey}
        phone={state.phone}
        onNext={handleOtpNext}
        onExpired={handleOtpExpired}
        onResend={handleResend}
      />
    );
  }

  if (step === 'profile') {
    return <ProfileStep onNext={handleProfileNext} />;
  }

  if (step === 'preferences') {
    return <PreferencesStep onNext={handlePreferencesNext} />;
  }

  if (step === 'success') {
    return (
      <SuccessScreen
        onGoToEvents={handleClose}
        onGoToProfile={handleClose}
        onClose={handleClose}
      />
    );
  }

  return (
    <ExpiredScreen
      onResend={handleResend}
      onChangePhone={handleChangePhone}
    />
  );
}
