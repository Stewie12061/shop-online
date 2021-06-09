class ApplicationController < ActionController::Base
    before_action :set_locale
    before_action :fetch_language
    private
    def set_locale
        p session[:locale]
        locale=session[:locale] || :en
        p locale
        I18n.locale=locale.to_sym
    end

    def fetch_language
        @languages = [{value: 'Tiếng Việt', id: :vi}, {value: 'English', id: :en}].map{|l| OpenStruct.new(l)}
    end
end
