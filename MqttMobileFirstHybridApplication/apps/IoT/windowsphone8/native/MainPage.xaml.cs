using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.IO.IsolatedStorage;
using System.Windows;
using Microsoft.Phone.Controls;
using System.Reflection;
using System.Collections;
using Microsoft.Phone.Shell;
using IBM.Worklight;

namespace IoT
{
    public partial class MainPage : PhoneApplicationPage
    {
        public MainPage()
        {
            InitializeComponent();
            WL.createInstance(); //Create the instance of the ActionSender API's
            Loaded += PhoneAppPage_Loaded;
        }

		void CordovaView_Loaded(object sender, RoutedEventArgs e)
		{
			
		}
		
		private void PhoneAppPage_Loaded(object sender, RoutedEventArgs e)
        {
            UserAgentHelper.GetUserAgent(LayoutRoot, userAgent =>
            {
                if (!PhoneApplicationService.Current.State.ContainsKey("userAgent"))
                	PhoneApplicationService.Current.State.Add("userAgent", userAgent); //Store it temporarly so that can be used later (in XHRSender)
            });
        }
   }
}