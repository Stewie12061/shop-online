class ApplicationController < ActionController::Base
    before_action :set_locale
    private
    def set_locale
        locale=session[:locale] || :en
        I18n.locale=locale
    end
end
