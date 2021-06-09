class ApplicationController < ActionController::Base
    before_action :set_locale
    private
    def set_locale
        p session[:locale]
        locale=session[:locale] || :vi
        p locale
        I18n.locale=locale.to_sym
    end
end
