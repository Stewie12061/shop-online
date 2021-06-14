class ApplicationController < ActionController::Base
    before_action :set_locale
    around_action :fetch_language
    private
    def set_locale
        p session[:locale]
        locale=session[:locale] || :en
        p locale
        I18n.locale=locale.to_sym
    end

    def fetch_language
        @languages = [{value: I18n.t('lang.vi'), id: :vi}, {value: I18n.t('lang.en'), id: :en}].map{|l| OpenStruct.new(l)}
        yield
    end
end
