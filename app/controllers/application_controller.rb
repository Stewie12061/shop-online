class ApplicationController < ActionController::Base
    before_action :set_locale
    private
    def set_locale
        locale=session[:locale] || :vi
        I18n.locale=locale
    end
end
