import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "../screens/Splash";

/* auth screens */
import LoginIndex from "../screens/auth/Index";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import VerificationUser from "../screens/auth/VerificationOtp";
import ValidationSuccess from "../screens/auth/VerificationOtpSuccess";
import Logout from "../screens/auth/Logout";

import Language from "../screens/Language";
import Welcome from "../screens/Welcome";
import Onboarding from "../screens/onboarding/Onboarding";

import GetEmail from "../screens/changingPassword/GetEmail";
import MultiFactor from "../screens/changingPassword/MultiFactor";
import ChangePassword from "../screens/changingPassword/ChangePassword";
import Done from "../screens/changingPassword/PasswordChengedSuccess";
import MenageHome from "../screens/menages/home/MenageHome";
import Otherscollect from "../screens/menages/collects/Otherscollect";
import CollectDetails from "../screens/menages/collects/CollectDetails";
import DeclaredSuccess from "../screens/menages/collects/DeclaredSuccess";
import Declarations from "../screens/menages/declarations/Declarations";

import CollectDetailsUploadImages from "../screens/menages/collects/CollectDetailsUploadImages";

import Notification from "../screens/menages/notifications/Notification";
import Message from "../screens/menages/supports/Message";
import Profile from "../screens/menages/profile/Profile";

import EditProfile from "../screens/menages/profile/editProfileComponents/EditProfile";
import ChooseTypeMoneyTransfer from "../screens/menages/profile/transferMoney/ChooseTypeMoneyTransfer";
import TransferWithBank from "../screens/menages/profile/transferMoney/TransferWithBank";
import DataBankConfirmation from "../screens/menages/profile/transferMoney/DataBankConfirmation";
import TransformationSuccess from "../screens/menages/profile/transferMoney/TransformationSuccess";

import ConditionBankAppScreen from "../screens/menages/profile/moneyWithdrawal/withdrawalUsingApp/ConditionBankAppScreen";
import ConditionBankCounterScreen from "../screens/menages/profile/moneyWithdrawal/withdrawalUsingCounter/ConditionBankCounterScreen";
import DataBankApp from "../screens/menages/profile/moneyWithdrawal/withdrawalUsingApp/DataBankApp";
import DataBankCounter from "../screens/menages/profile/moneyWithdrawal/withdrawalUsingCounter/DataBankCounter";

import ChooseTypeRecharge from "../screens/menages/recharge/ChooseTypeRecharge";
import MarocTele from "../screens/menages/recharge/MarocTele";
import ConfirmationRechargeDetails from "../screens/menages/recharge/ConfirmationRechargeDetails";
import RechargeScreenSuccess from "../screens/menages/recharge/RechargeScreenSuccess";
import Orange from "../screens/menages/recharge/Orange";

import Inwi from "../screens/menages/recharge/Inwi";

import Donate from "../screens/menages/donation/Donate";

import Wallet from "../screens/menages/wallet/Wallet";
import Langs from "../screens/menages/languages/Langs";
import Terms from "../screens/termesConditions/Terms";

import Politique from "../screens/termesConditions/Politique";
import FaqIndex from "../screens/faq/FaqIndex";

// Collector Route
import CollectorHome from "../screens/collectors/home/CollectorHome";
import Filter from "../screens/collectors/filter/Filter";

import DeclarationDetails from "../screens/collectors/declarations/DeclarationDetails";

// collector veriefy hes address after register to app
import Address from "../screens/collectors/profileDetails/Address";
import ChooseTypeIdentityConfirmation from "../screens/collectors/profileDetails/ChooseTypeIdentityConfirmation";
import UploadIdentity from "../screens/collectors/profileDetails/UploadIdentity";

import PayedAlert from "../screens/collectors/declarations/PayedAlert";

import VerifyAccount from "../screens/collectors/profileDetails/VerifyAccount";
import CollectorProfile from "../screens/collectors/profileDetails/profile/CollectorProfile";
import CollectEditProfile from "../screens/collectors/profileDetails/profile/CollectEditProfile";
import CollectLanguages from "../screens/collectors/settings/CollectLanguages";
import CollectSupport from "../screens/collectors/support/CollectSupport";

//pay,nets details
import PaymentsDetails from "../screens/collectors/declarations/PaymentsDetails";

//collector payment
import SuccessPayment from "../screens/collectors/declarations/SuccessPayment";

import CollectorNotification from "../screens/collectors/notification/CollectorNotification";
import CollectorOrders from "../screens/collectors/orders/CollectorOrders";

// orders
import EditeAccepted from "../screens/collectors/orders/Accepte/EditeAccepted";

// Wallet COLLECTOR
import CollecttorWallet from "../screens/collectors/wallet/CollecttorWallet";
import Deposit from "../screens/collectors/wallet/deposit/Deposit";
import CollectorAddCard from "../screens/collectors/wallet/deposit/payments/CollectorAddCard";
import AddCardInfo from "../screens/collectors/wallet/deposit/payments/AddCardInfo";
import Confirmation from "../screens/collectors/wallet/deposit/payments/Confirmation";
import SuccessCollectorPayment from "../screens/collectors/wallet/deposit/payments/SuccessCollectorPayment";
import CollectorWithdrawal from "../screens/collectors/wallet/withdrawal/CollectorWithdrawal";
import CollectorWithdrawalAddCard from "../screens/collectors/wallet/withdrawal/CollectorWithdrawalAddCard";
import WithdrawalCollectorConfirmPayment from "../screens/collectors/wallet/withdrawal/WithdrawalCollectorConfirmPayment";
import WithdrawalAddCardInfo from "../screens/collectors/wallet/withdrawal/WithdrawalAddCardInfo";
import CollectorModePayment from "../screens/collectors/profileDetails/profile/paymentMode/CollectorModePayment";
import AddNewCreditCard from "../screens/collectors/profileDetails/profile/paymentMode/AddNewCreditCard";
import Statistics from "../screens/collectors/wallet/statistics/Statistics";

// Menage Wallet
import MenageAddCard from "../screens/menages/profile/transferMoney/menageBankAddCard/MenageAddCard";

// Donation & Card information
import MenageAddCardInfo from "../screens/menages/profile/transferMoney/menageBankAddCard/MenageAddCardInfo";
import DonationAddCard from "../screens/menages/donation/DonationAddCard";
import DonationAddCardBankInfo from "../screens/menages/donation/DonationAddCardBankInfo";
import DonationConfirmation from "../screens/menages/donation/DonationConfirmation";
import DonationSuccess from "../screens/menages/donation/DonationSuccess";

// Mode payment for menage
import MenageModePayment from "../screens/menages/payments/MenageModePayment";
import MenageAddCreditCard from "../screens/menages/payments/MenageAddCreditCard";

import AsyncStorage from "@react-native-async-storage/async-storage";
import MenageBankDetails from "../screens/menages/profile/transferMoney/menageBankAddCard/MenageBankDetails";
import TransactionSuccess from "../screens/menages/wallet/TransactionSuccess";

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          animation: "none",
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Hello" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="LoginIndex" component={LoginIndex} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

        <Stack.Screen name="VerificationUser" component={VerificationUser} />
        <Stack.Screen
          name="VerificationSuccess"
          component={ValidationSuccess}
        />
        <Stack.Screen name="ChangePasswordIndex" component={GetEmail} />
        <Stack.Screen name="VerifyPhone" component={MultiFactor} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen name="MenageHome" component={MenageHome} />
        <Stack.Screen name="Logout" component={Logout} />
        <Stack.Screen name="OtherCollects" component={Otherscollect} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              presentation: "modal",
            },
            headerTransparent: true,
          }}
          name="CollectDetails"
          component={CollectDetails}
        />
        <Stack.Screen name="DeclarationSuccess" component={DeclaredSuccess} />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Mes demandes",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DeclarationsIndex"
          component={Declarations}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajoute Image",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectDetailsUploadImages"
          component={CollectDetailsUploadImages}
        />

        <Stack.Screen name="Notifications" component={Notification} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Suport Message",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Suports"
          component={Message}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              presentation: "modal",
            },
            headerTransparent: true,
          }}
          name="Profile"
          component={Profile}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Edit Profile",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="EditProfile"
          component={EditProfile}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="OptionsTransitins"
          component={ChooseTypeMoneyTransfer}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="WithBank"
          component={TransferWithBank}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DataBankConfirmation"
          component={DataBankConfirmation}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Sélection de carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MenageAddCard"
          component={MenageAddCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajouter une carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MenageAddCardInfo"
          component={MenageAddCardInfo}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajouter les details du compte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MenageBankDetails"
          component={MenageBankDetails}
        />
        <Stack.Screen
          name="TransactionSuccess"
          component={TransactionSuccess}
        />
        <Stack.Screen name="TransSuccess" component={TransformationSuccess} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DescScreen"
          component={ConditionBankAppScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="InfoBank"
          component={DataBankApp}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DescScreenT"
          component={ConditionBankCounterScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retrait D'argent",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="InfoBankT"
          component={DataBankCounter}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="RechargeIndex"
          component={ChooseTypeRecharge}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MarocTele"
          component={MarocTele}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Verify"
          component={ConfirmationRechargeDetails}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="RechargeSuccess"
          component={RechargeScreenSuccess}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Orange"
          component={Orange}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Recharge",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Inwi"
          component={Inwi}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Donation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Donation"
          component={Donate}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Sélection de carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DonationAddCard"
          component={DonationAddCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajouter une carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DonationAddCardBankInfo"
          component={DonationAddCardBankInfo}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Sélection de carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DonationConfirmation"
          component={DonationConfirmation}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Sélection de carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="DonationSuccess"
          component={DonationSuccess}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ma Pochette",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="WalletIndex"
          component={Wallet}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Langue",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Langs"
          component={Langs}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Termes & Conditions",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Terms"
          component={Terms}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Politique De Confidentialité",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Politique"
          component={Politique}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "FAQ",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#8D97A8",
            },
          }}
          name="FaqIndex"
          component={FaqIndex}
        />

        <Stack.Screen name="CollectorHome" component={CollectorHome} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Filter",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Filter"
          component={Filter}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              presentation: "modal",
            },
            headerTransparent: true,
          }}
          name="DeclarationDetails"
          component={DeclarationDetails}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Mode de paiement",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MenageModePayment"
          component={MenageModePayment}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Mode de paiement",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="MenageAddCreditCard"
          component={MenageAddCreditCard}
        />

        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen
          name="ChooseTypeIdentityConfirmation"
          component={ChooseTypeIdentityConfirmation}
        />
        <Stack.Screen name="UploadIdentity" component={UploadIdentity} />
        <Stack.Screen name="PayedAlert" component={PayedAlert} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "",
            headerStyle: {
              presentation: "modal",
            },
            headerTransparent: true,
          }}
          name="CollectorProfile"
          component={CollectorProfile}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Mon profil",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectEditProfile"
          component={CollectEditProfile}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Langue",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectLanguages"
          component={CollectLanguages}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Support",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectSupport"
          component={CollectSupport}
        />
        <Stack.Screen name="PaymentsDetails" component={PaymentsDetails} />
        <Stack.Screen name="SuccessPayment" component={SuccessPayment} />
        <Stack.Screen
          name="CollectorNotification"
          component={CollectorNotification}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Mes Orders",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectorOrders"
          component={CollectorOrders}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Modification",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="EditeAcceptedName"
          component={EditeAccepted}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Portefeuille",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollecttorWallet"
          component={CollecttorWallet}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Portefeuille",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Deposit"
          component={Deposit}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Paiement",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectorAddCard"
          component={CollectorAddCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajouter une carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="AddCardInfo"
          component={AddCardInfo}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Confirmation"
          component={Confirmation}
        />
        <Stack.Screen
          name="SuccessCollectorPayment"
          component={SuccessCollectorPayment}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Retirer",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectorWithdrawal"
          component={CollectorWithdrawal}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Paiement",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectorWithdrawalAddCard"
          component={CollectorWithdrawalAddCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="WithdrawalAddCardInfo"
          component={WithdrawalAddCardInfo}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="WithdrawalCollectorConfirmPayment"
          component={WithdrawalCollectorConfirmPayment}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Confirmation",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="CollectorModePayment"
          component={CollectorModePayment}
        />

        <Stack.Screen
          options={{
            headerShown: true,
            title: "Ajouter une carte",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="AddNewCreditCard"
          component={AddNewCreditCard}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            title: "Statistiques",
            headerTitleAlign: "center",
            headerTintColor: "#33CC66",
            headerShadowVisible: false,
          }}
          name="Statistics"
          component={Statistics}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
