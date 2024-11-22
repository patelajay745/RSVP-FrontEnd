import { FC, useEffect, useState } from "react";
import { Bell, Mail, UserCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { capitalizeFirstLetter } from "@/utils/StringOperations";
import { useApi } from "@/services/api";
import { toast, Toaster } from "sonner";
import { EmailResponse } from "@/types/api";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DefaultDashboard: FC = () => {
  const [resendingEmail, setResendingEmail] = useState(false);
  const [otp, setOtp] = useState("");
  const [completedOtp, setCompletedOtp] = useState(false);
  const { user } = useAuth();
  const firstName = user?.firstName;
  const api = useApi();
  const navigate = useNavigate();

  const handleOTPChange = (value: string) => {
    setOtp(value);
  };

  useEffect(() => {
    if (otp.length >= 6) {
      setCompletedOtp(true);
      return;
    }

    setCompletedOtp(false);
  }, [otp]);

  const handleResendEmail = async () => {
    setResendingEmail(true);

    try {
      const result = (await api.sendVerifyEmail()) as unknown as EmailResponse;
      if (result.message != "") {
        toast.success("Verification Email has been sent");
      }
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again",
      });
    } finally {
      setResendingEmail(false);
    }
  };
  return (
    <div className="container mx-auto p-6  ">
      <Toaster />
      <Alert className="mb-6 dark:border-amber-500/20 dark:bg-amber-500/10 border-amber-500 bg-amber-50">
        <Mail className="h-4 w-4" />
        <AlertTitle>Please verify your email address</AlertTitle>
        <AlertDescription className="mt-2 flex items-center justify-between">
          <span>
            Check your inbox for the verification link to unlock all features.
          </span>

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Verify Email</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] ">
                <DialogHeader>
                  <DialogTitle>Verify Email</DialogTitle>
                  <DialogDescription>
                    Please enter the code , which hase been sent to your email.
                  </DialogDescription>
                </DialogHeader>

                <div className="flex items-center justify-center">
                  <InputOTP
                    value={otp}
                    onChange={handleOTPChange}
                    maxLength={6}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => {
                      console.log("clecked");
                      setOtp("");
                    }}
                  >
                    Clear
                  </Button>
                  <Button disabled={!completedOtp} type="submit">
                    Verify
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              onClick={handleResendEmail}
              disabled={resendingEmail}
              className="dark:bg-background"
            >
              {resendingEmail ? "Sending..." : "Resend Email"}
            </Button>
          </div>
        </AlertDescription>
      </Alert>

      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome {capitalizeFirstLetter(firstName)} 👋
        </h1>
        <p className="text-muted-foreground mt-2">
          Let's get you started with managing your events.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Create Event</CardTitle>
            <CardDescription>
              Start planning your next gathering
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              New Event
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              ⚠️ Verify email to unlock
            </p>
          </CardContent>
        </Card>

        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Complete Profile</CardTitle>
            <CardDescription>Add your details to get started</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              <UserCircle className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="dark:border-muted/20">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Customize your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" className="w-full">
              <Bell className="mr-2 h-4 w-4" />
              Configure
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="dark:border-muted/20">
        <CardHeader>
          <CardTitle>What you'll be able to do after verification</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Create and manage events
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Send invitations to guests
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Track RSVPs and responses
            </li>
            <li className="flex items-center text-muted-foreground">
              <span className="mr-2">✨</span>
              Manage guest lists and details
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
